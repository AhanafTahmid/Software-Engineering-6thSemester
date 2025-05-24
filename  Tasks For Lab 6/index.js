const express = require('express');
const fs = require('fs');
const data = require('./MOCK_DATA.json');
const app = express();

//Rest API for Sample Companies (Having ID, Compnay Name, email)

app.use(express.urlencoded());
app.get('/items/companies', (req, res) => {
    //return res.json(data);
    const html = ` 
    <ul> ${ data.map(u=> `<li>${u.company_name}</li>`).join("") } </ul>
    `
    res.send(html)
});

app.get('/items', (req, res) => {
    return res.json(data);
});

app.post('/items', (req, res) => {
    const body = req.body;
    data.push({id: data.length + 1, ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), () => {});
    return res.status(201).json({status: "success", id:data.length});
});

app.put('/items/:id', (req, res) => {
    const body = req.body;//what I am sending in api, company name
    const id = req.params.id;
    const idx = data.findIndex(item => item.id == id);
    // console.log(idx)
    if( idx == -1) return res.status(404).json({status: "fail"});
    else{
        data[idx] = { ...data[idx], ...body };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), () => {});
        return res.json({status: "success"});
    }
});

app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    const idx = data.findIndex(item => item.id == id);
    if( idx == -1) return res.status(404).json({status: "fail"});
    else{
        data.splice(idx,1);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), () => {});
        res.json({ message: `Company with id ${id} deleted.` });
    }
});

app.listen(3000, console.log("Running on port 3000"));