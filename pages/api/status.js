// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import packageJson from '../../package.json';

export default function handler(req, res) {
  res.status(200).json({ status: 'ok', version: packageJson.version });
}
