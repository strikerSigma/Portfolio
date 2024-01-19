import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '../email'

// export async function GET() {
//   const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const result = await res.json()
//   return NextResponse.json({ result })
// }
export async function POST(request) {
  const body = await request.json()
//   const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
// sendMail("ibrahimsomeonenotimportant@gmail.com","This is a test message","do not rply")
    const res = sendMail("ibrahimsomeonenotimportant@gmail.com","This is a test message","do not rply")
  const data = await res.json();
  return NextResponse.json(data)

}