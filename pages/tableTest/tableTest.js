Page({
    data: {
        tableList: [{
                id: "1",
                name: "iphone1",
                number: 10,
                model: '4',
                singlePrice: 6666,
                remarks: "太贵了"
            },
            {
                id: "2",
                name: "iphone2",
                model: '5',
                number: 20,
                singlePrice: 7666,
                remarks: "太贵了"
            },
            {
                id: "3",
                name: "iphone3",
                model: '6',
                number: 30,
                singlePrice: 8666,
                remarks: "太贵了"
            },
            {
                id: "4",
                name: "iphone4",
                model: '7',
                number: 40,
                singlePrice: 9666,
                remarks: "太贵了"
            },
            {
                id: "5",
                name: "iphone5",
                model: '8',
                number: 50,
                singlePrice: 8666,
                remarks: "太贵了"
            }
        ]
    },
    onLoad() {
        this.setData({
            total: this.data.tableList.reduce((prev, next) => {
                return prev + next.number * next.singlePrice;
            }, 0)
        });
        console.log("大家好这里是tableTest页面", this.data);
    }
})