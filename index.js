require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express()
const port = process.env.PORT || 4000;

const dataPath = path.join(__dirname, 'userData.json');
const userData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Middleware to enable CORS
app.use(cors());

// i need to import data from json and use it for userData

const data = {
 
  "content": "<h2><strong>Date - August 1, 2023</strong></h2><h5><br></h5><p>The Orasi Media Platform User Agreement</p><ol><li>Welcome to the Orasi Media Platform (“the Platform”), for the licensing of media content. The Platform is owned and operated by Orasi Media, Inc., a Delaware corporation with a mailing address at 425 Washington Blvd, #1210, Jersey City, New Jersey 07310, USA (“Orasi Media” or “we” or “us”).</li><li>The Platform is a business-to-business (B2B) platform intended to facilitate the licensing of media content (“Content”) between acquisition and syndication professionals (“Purpose”). The Content is represented on the Platform as a “Listing”.</li><li>The Platform is intended only for bona fide entertainment businesses and individuals with a bona fide intention to transact commercial business consistent with the Purpose in the Platform. Participants must register within the Platform by providing and verifying the details required during the registration process and enter into a separate written agreement with Orasi Media (a “Participation Agreement”). Orasi Media has absolute discretion as to the admission of users to the Platform (“Registered Users”), and may refuse to allow the registration of an applicant for any reason.</li><li>Registered Users may be:</li></ol><ul><li><strong>“Sellers”</strong>– Registered Users that make available Content for licensing. This includes:</li><li class=\"ql-indent-2\">Parties that own the intellectual property underlying the Content</li><li class=\"ql-indent-2\">Parties that are authorized by content owners to act as Agents/Distributors, and</li><li class=\"ql-indent-1\">Parties that have acquired the rights to distribute the Content.</li><li><strong>“Buyers”</strong>- Registered Users that wish to acquire rights to broadcast or exhibit Content made available by Sellers through the Platform.</li><li class=\"ql-indent-2\">Parties that own the intellectual property underlying the Content</li><li class=\"ql-indent-2\">Parties that are authorized by content owners to act as Agents/Distributors, and</li><li class=\"ql-indent-1\">Parties that have acquired the rights to distribute the Content.</li></ul><ol><li>The Platform is designed to facilitate commercial transactions amongst Registered Users in respect of the Purpose, and Orasi Media is entitled to be paid the commission in return for its work in facilitating these transactions pursuant to the terms of a Registered User’s Participation Agreement. The Platform is not a platform to conduct research.</li><li>The Registered User shall not (and shall not permit any of its affiliates or advisers, agents, employees, officers or other representatives or any third parties whatsoever to) use and access the Platform to:</li><li class=\"ql-indent-1\">reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Platform or the technology underlying it;</li><li class=\"ql-indent-1\">copy the user experience and functionality of the Platform;</li><li class=\"ql-indent-1\">modify or obscure any copyright, trademark or other proprietary notices contained in the Platform; or</li><li class=\"ql-indent-1\">deal directly with a Buyer for Content in violation of a Registered User’s Participation Agreement.</li><li>Third Party Copyrights and Other Rights: Orasi Media respects the intellectual property rights of all Registered Users. If you believe that your copyright has been infringed, please inform us as soon as possible through info@orasimedia.com. If Orasi Media reasonably believes that copyright may be subject to a valid infringement claim within the Platform, it will have the right, in its sole discretion, to take down the material in question and to notify the parties in question.</li><li>No Warranties: Orasi Media provides the Platform on an \"as is\" and \"as available\" basis. You therefore use the Platform at your own risk. Orasi Media expressly disclaims any and all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, non- infringement, and any other warranty that might arise under any law. Without limiting the foregoing, Orasi Media makes no representations or warranties:</li><li class=\"ql-indent-1\">That the Platform will be permitted in your jurisdiction;</li><li class=\"ql-indent-1\">That the Platform will be uninterrupted or error-free;</li><li class=\"ql-indent-1\">Concerning any Listing Information or Content;</li><li class=\"ql-indent-1\">Concerning a Registered User’s rights to make available any Content;</li><li class=\"ql-indent-1\">That the Platform will meet your business or professional needs;</li><li class=\"ql-indent-1\">That Orasi Media will continue to support any particular feature of the Platform; or</li><li class=\"ql-indent-1\">Concerning sites and resources outside of the Platform, even if linked to /from the Platform.</li><li>Except as otherwise set forth in Registered User’s Participation Agreement, this Agreement shall be governed by the laws of the State of Delaware, USA, and the parties submit to the exclusive jurisdiction of the state and federal courts of the State of Delaware.</li><li>If any term of this Agreement is found invalid or unenforceable by any court of competent jurisdiction, that term will be severed from this Agreement. No failure or delay by Orasi Media in exercising any right hereunder will waive any further exercise of that right. Orasi Media's rights and remedies hereunder are cumulative and not exclusive.</li><li>Orasi Media will not be liable for delay or failure to perform any acts resulting from causes outside its reasonable control, including, but not limited to, acts of nature or God, fire, flood, earthquake, accidents, strikes, war, terrorism, pandemics, governmental acts, or failure of or interruption in services or utilities.</li><li>You consent to receive all communications including notices, agreements, disclosures, or other information from Orasi Media electronically. Orasi Media may provide all such communications by email or by posting them on the Platform. For any questions or issues email us at: info@orasimedia.com.</li><li>This Platform User Agreement may not be modified except by a revised Platform User Agreement posted by Orasi Media on the Platform or a written amendment signed by an authorized representative of Orasi Media. A revised Platform User Agreement will be effective as of the date it is posted on the Platform. By continuing to use the Platform you consent to the terms in the revised Platform User Agreement.</li><li>By using the Platform, you acknowledge that you have read and accepted Orasi Media’s privacy policy located on the Platform as amended or updated by Orasi Media from time to time (the “Privacy Policy”). The Privacy Policy forms part of this Platform User Agreement and is incorporated by reference herein. Orasi Media may periodically update this Platform User Agreement and/or the Privacy Policy. By continuing to use and access the Platform after the published date of any such update(s), you specifically agree to be bound by the updated terms and conditions.</li></ol><h5><br></h5>",
  
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter-Sonking11');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login karo<h1/>');
})

app.get('/samosa',(req,res)=>{
    res.send('Bhai chalo samosa khalete');
})

app.get('/userData',(req,res)=>{
    res.json(userData);
})

app.get('/data',(req,res)=>{
  res.json(data.content);
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

