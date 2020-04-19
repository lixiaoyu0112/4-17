#!/usr/bin/env node 
const program = require('commander')
const inquirer = require('inquirer')
const axios = require('axios')

program.command('create')
       .description('创建')
       .action(()=>{
            inquirer.prompt([
                {
                    message:'请输入要查询的星座名称',
                    type:'input',
                    name:'data'
                }
            ]).then(res=>{
                let name = encodeURI(res.data)
                axios.get(`http://web.juhe.cn:8080/constellation/getAll?key=1e86cbe4ac7c8e1d23dcc5a133221f7b&type=today&consName=${name}`)
                     .then(ress=>{
                         console.log(ress.data)
                     })
            })
       })

program.parse(program.argv)