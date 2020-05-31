const express=require('express');
const hbs=require('hbs');

const app=express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname +'/public'));


app.get('/',(req, res)=>{
    res.render('index', {
        autor : 'Paola Muñoz',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/vinci',(req, res)=>{
    res.render('pintor1', {
        autor : 'Paola Muñoz',
        year : new Date().getFullYear(),
        title : 'Leonardo'
    });
});

app.get('/miguel',(req, res)=>{
    res.render('pintor2',{
        autor : 'Paola Muñoz',
        year : new Date().getFullYear(),
        title : 'Miguel'
    });
});

app.get('/frida',(req, res)=>{
    res.render('pintor3',{
        autor : 'Paola Muñoz',
        year : new Date().getFullYear(),
        title : 'Frida'
    });
});

app.get('/hung',(req, res)=>{
    res.render('pintor4',{
        autor : 'Paola Muñoz',
        year : new Date().getFullYear(),
        title : 'Hung'
    });
});

app.listen(3000,()=>{
    console.log("Escuchando puerto 3000");
});