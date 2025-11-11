import mercadopago from 'mercadopago';

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end();
  try {
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
    });

    const { title, price } = req.body;
    const preference = {
      items: [
        {
          title: title || 'TuAbogadoMX Subscription',
          quantity: 1,
          unit_price: Number(price) || 0
        }
      ],
      back_urls: {
        success: req.headers.origin + '/dashboard',
        failure: req.headers.origin + '/dashboard',
        pending: req.headers.origin + '/dashboard'
      },
      auto_return: 'approved'
    };

    const response = await mercadopago.preferences.create(preference);
    return res.status(200).json({ init_point: response.body.init_point, preference_id: response.body.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || err.toString() });
  }
}
