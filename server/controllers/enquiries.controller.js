const db = require('../config/database');

const insertEnquiry = db.prepare(`
  INSERT INTO contact_enquiries (name, organization, email, phone, category, message)
  VALUES (@name, @organization, @email, @phone, @category, @message)
`);

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

exports.create = (req, res, next) => {
  try {
    const data = {
      name: clean(req.body.name),
      organization: clean(req.body.organization),
      email: clean(req.body.email),
      phone: clean(req.body.phone),
      category: clean(req.body.category),
      message: clean(req.body.message)
    };

    if (!data.name || !data.message || (!data.email && !data.phone)) {
      return res.status(400).json({
        error: 'Name, message, and an email address or phone number are required.'
      });
    }
    if (data.name.length > 160 || data.organization.length > 200 ||
        data.email.length > 254 || data.phone.length > 40 ||
        data.category.length > 120 || data.message.length > 10000) {
      return res.status(400).json({ error: 'One or more fields are too long.' });
    }

    const result = insertEnquiry.run(data);
    return res.status(201).json({ success: true, id: Number(result.lastInsertRowid) });
  } catch (error) {
    return next(error);
  }
};
