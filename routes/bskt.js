import {Router} from 'express'


const router = new Router()

router.get('/',(req,res)=>{
    const title = 'About our companyS'
    res.render('bskt')
})

export default router;