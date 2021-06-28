import type { NextApiRequest, NextApiResponse } from 'next'

const mailer = (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.body)
  }

export default mailer