// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir("./blogdata", "utf-8")
  let myfile;
  let allblogs = []
  console.log(data)
  for(let i=0; i<data.length; i++){
    const item = data[i]
    myfile = await fs.promises.readFile("blogdata/"+item, "utf-8")
    allblogs.push(JSON.parse(myfile))
  }
    res.status(200).json(allblogs)
}
