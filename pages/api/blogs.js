// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readdir("./blogdata", "utf-8", (err, data)=>{
    console.log(data)
    res.status(200).json(data)
  })
}
