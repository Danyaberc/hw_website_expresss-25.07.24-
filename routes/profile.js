import {Router} from 'express'

const router = new Router()

router.get('/',(req,res) =>{
    const arrInfo = [{
        title: 'Ваш профіль',
        discr: 'Баланс на рахунку',
        order: 'Ваші замовлення',
        option: 'Налаштування аккаунтуe'
    }]
    res.render('profile', {arrInfo})
})

export default router;