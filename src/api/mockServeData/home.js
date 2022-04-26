import Mock from 'mockjs'
let list = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    iphone: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [{
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: 'iphone',
                        value: 5999
                    },
                    {
                        name: 'vivo',
                        value: 1999
                    },
                    {
                        name: 'oppo',
                        value: 3999
                    },
                    {
                        name: '魅族',
                        value: 4999
                    },
                    {
                        name: '三星',
                        value: 6999
                    }
                ],
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: list
                },
                userData: [{
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 13,
                        active: 400
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 75,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 400
                    },
                    {
                        date: '周日',
                        new: 88,
                        active: 650
                    }

                ],
                tableData: [{
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800,

                }, {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800,
                }, {
                    name: 'iphone',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800,
                }, {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800,
                }],
            }
        }
    }
}