exports.handle = function (api, req, res) {
    var emStatus = 0;
    global.api.yfy.emStatus = 1
    
    if (api.indexOf('/yfy/getPublicKey') != -1) {
        res.end(JSON.stringify({
            "modulus":"00aa5dfe08d090b0e989a1bde59c1156aac8c0ac85abf78fb79a439cd7f3e0e511a74730d95b3f94a116f8358aef42040a227daa27c90deecbe4f22e1fb6206bc8e862d9d3e8e90cfcd3dbd9c6e4a179506e6e0ef43f351b891d4bc753c5a18a7dcb78e356c55181e0cb4615f27deb84f36deb9436337227813fe90cc2cbc5cb63","publicExponent":"010001"
        }), 'utf-8')
    }
    else if (api.indexOf('yfy/infanthospital/initCustomer') !== -1) {
        emStatus = 1;
        res.end(JSON.stringify({
            status: 0,
            emStatus:2,
            cardList: [
            {
                cardNumber: 120,
                emType: 0
            },
            {
                cardNumber: 121,
                emType: 1
            },
            {
                cardNumber: 122,
                emType: 2
            }
            ],
            "uid":"${openId}",
            "name":"张三",
            "mobile":"15880980987",
            "dateChildbirth": '2016.2.16',
            "dateLmp": '2016.1.1',
            age: 30
        }), 'utf-8')
    }
    else if (api.indexOf('yfy/infanthospital/getBookInfo') !== -1) {
        res.end(JSON.stringify({
            status: 0,
            weekPregnantList: [
            {
                weekPregnant: 2,
                checkDate: '2010-01-29',
                checkWeek: '周三',
                checkTime: '08:30 ~ 90:00',
                itemList: [
                {
                    id: 2,
                    name: '抽血',
                    idQueue: 1,
                    tip: '123'
                },
                {
                    id: 2,
                    name: '验尿',
                    idQueue: 1,
                    tip: '456'
                },    
                ],
                status: '13',
            },
            {
                weekPregnant: 2,
                checkDate: '2010-11-11',
                checkWeek: '周二',
                checkTime: '08:30 ~ 90:00',
                itemList: [
                {
                    name: 'B超',
                    tip: '注意事项',
                    isReported: false,
                    RepType: '02'
                },
                {
                    name: '胎心音+产前检查',
                    tip: '注意事项',
                    isReported: false,
                    RepType: '03'
                }, 
                {
                    name: '25羟基维生素D',
                    tip: '注意事项',
                    isReported: true,
                    RepType: '04'
                }, 
                ],
                status: '2',
            }
            ]
        }), 'utf-8')
    }
    else if (api.indexOf('yfy/infanthospital/getQueueInfo') !== -1) {
        res.end(JSON.stringify({
            status: 0,
            patientName: '小明',
            isToday: 1,
            weekPregnant: 2,
            queueDate: '2015-2-10',
            checkWeek: '周三',
            checkTime: '08:30 ~ 90:00',
            queueList: [
            {
                id: 2,
                name: '抽血',
                departmentAddress: '1号楼1楼验血中心',
                queueStatus: 2,
                queueNumberMine: 10,
                queueNumberCurrent: 20,
                queueWaitingNumber: 30

            },
            {
                id: 3,
                name: '超声',
                departmentAddress: '1号楼2楼验血中心',
                queueStatus: 2,
                queueNumberMine: 10,
                queueNumberCurrent: 10,
                queueWaitingNumber: 30

            },
            {
                id: 4,
                name: '胎检',
                departmentAddress: '1号楼2楼验血中心',
                queueStatus: 5,
                queueNumberMine: 10,
                queueNumberCurrent: 20,
                queueWaitingNumber: 30
            },
            {
                id: 5,
                name: '尿检',
                departmentAddress: '1号楼2楼验血中心',
                queueStatus: 1,
                queueNumberMine: 10,
                queueNumberCurrent: 20,
                queueWaitingNumber: 30
            },
            {
                id: 6,
                name: '心电图',
                departmentAddress: '1号楼2楼验血中心',
                queueStatus: 3,
                queueNumberMine: 10,
                queueNumberCurrent: 20,
                queueWaitingNumber: 30 
            }
            ]
        }), 'utf-8')
    }
    // else if (api.indexOf('yfy/infanthospital/getQueueInfo') !== -1) {
    //     res.end(JSON.stringify({
    //      status: 0,
    //         QueueList: [
    //             {
    //                 QueueCode: 2,
    //                 QueueName: '抽血',
    //                 QueueNo: 120,
    //                 CurrentNo: 110
    //             },
    //             {
    //                 QueueCode: 2,
    //                 QueueName: '尿检',
    //                 QueueNo: 120,
    //                 CurrentNo: 110
    //             },
    //             {
    //                 QueueCode: 2,
    //                 QueueName: '心电图',
    //                 QueueNo: 120,
    //                 CurrentNo: 110
    //             }
    //         ]
    //  }), 'utf-8')
    // }
    else if (api.indexOf('yfy/infanthospital/getCustomerInfo') !== -1) {
        res.end(JSON.stringify({
            status: 0,
            emStatus:0,
            cardList: [
            {
                cardNumber: 120,
                emType: 0
            },
            {
                cardNumber: 121,
                emType: 1
            },
            {
                cardNumber: 122,
                emType: 2
            }
            ],
            "hashkey":"",
            "uid":"${openId}",
            "flag":"1",
            "msg":"",
            "patientNumber":"3211111111111",
            "name":"张三",
            "mobile":"15880980987",
            "dateChildbirth": '2016.2.16',
            "dateLmp": '2016.1.1',
            "birthday":1459500228173,
            age: 30
        }),'utf-8')
    }
    else if(api.indexOf('infanthospital/getUSReportDetail') !== -1){
        res.end(JSON.stringify({
            status:0,
            emStatus:0,
            "checkDate":"2016-04-07",
            "checkItem":"子宫|附件|胎儿生长监测|膀胱",
            "diagnosticTips":[
            "1.单胎",
            "2.胎儿生长相当于15W2D"
            ],
            "ultrasonicResult":[
            "子宫：外形增大",
            "胎儿：现孕14W6D",
            "宫内见1个胎儿，双顶径：30mm，头围：108mm，腹围：90mm，股骨长：16mm，CDFI示：胎心：155次/分，心律齐，检查过程中见胎心搏动",
            "胎盘：胎盘位置：前壁，胎盘厚：19mm，胎盘分级：0级，胎盘下缘盖过内口",
            "羊水：羊水深度：50mm",
            "附件：膀胱：未充盈",
            "左卵巢：未显示",
            "右卵巢：（—）"
            ]
        }),'utf-8')
    }
    else if(api.indexOf('infanthospital/getPathReportDetail') !== -1){
        res.end(JSON.stringify({
            "checkDate": "2016-02-29",
            "checkItem": "病理=验血",
            "cytology": {
                "herpesInfection": "无",
                "trichomonasInfection": "无",
                "candidaInfection": "无",
                "HPVInfection": "无"
            },
            "pathologicDiagnosis": {
                "specimenSatisfaction": "满意",
                "metaplasiaCells": "有",
                "cellMass": ">40%",
                "BacterialTransformation": "无",
                "neckCanalCell": "有"
            },
            "TBSDiagnosis": "（双侧）部分输卵管未见病变。"
        }),'utf-8')
    }
    else if(api.indexOf('infanthospital/getTSReportDetail') !== -1){
        res.end(JSON.stringify({
            "checkDate": "2016-04-08",
            "checkItem": "[早唐(新)-单胎]",
            "illustrate": "低度风险报告,只表明您的胎儿发生该种无异常的可能性非常小,并不能完全排除这种异常或其他异常的可能性.高度风险报告,只表明您的胎儿发生该种先天异常的可能性较大,并不是确诊,我们建议您立即到我院产前诊断门诊预约就诊.",
            "riskComputation": [
            {
                "riskResult": "低风险",
                "riskValue": "1:100000",
                "screening": "21-三体"
            },
            {
                "riskResult": "低风险",
                "riskValue": "1:100000",
                "screening": "18-三体"
            }
            ],
            "sampleInformationList": [
            {
                "correctionMOM": "0.31",
                "result": "17.59",
                "tag": "hGGb",
                "unit": "ng/mL"
            },
            {
                "correctionMOM": "1.85",
                "result": "6282.83",
                "tag": "PAPP-A",
                "unit": "mU/L"
            },
            {
                "correctionMOM": "1.08",
                "result": "1.50",
                "tag": "NT",
                "unit": "mm"
            }
            ]
        }),'utf-8')
    }
    else if(api.indexOf('infanthospital/getTSReportDetail') !== -1){
        res.end(JSON.stringify({
         "checkDate": "2016-03-18",
         "checkItem": "[中唐(新)]",
         "illustrate": "低度风险报告,只表明您的胎儿发生该种无异常的可能性非常小,并不能完全排除这种异常或其他异常的可能性.高度风险报告,只表明您的胎儿发生该种先天异常的可能性较大,并不是确诊,我们建议您立即到我院产前诊断门诊预约就诊.",
         "riskComputation": [
         {
            "riskResult": "低风险",
            "riskValue": "1:7619",
            "screening": "21-三体"
        },
        {
            "riskResult": "低风险",
            "riskValue": "1:77118",
            "screening": "18-三体"
        },
        {
            "riskResult": "1:低风险",
            "riskValue": "",
            "screening": "NTD"
        }
        ],
        "sampleInformationList": [
        {
            "correctionMOM": "0.65",
            "result": "12.00",
            "tag": "hGGb",
            "unit": "ng/mL"
        },
        {
            "correctionMOM": "0.91",
            "result": "35.24",
            "tag": "AFP",
            "unit": "U/mL"
        },
        {
            "correctionMOM": "1.25",
            "result": "6.07",
            "tag": "UE3",
            "unit": "nmol/L"
        }
        ]
    }),'utf-8')
    }
    else if(api.indexOf('infanthospital/getUSReportDetail') !==  -1){
        res.end(JSON.stringify({
            "checkDate": "2016-05-06",
            "checkItem": "子宫|附件|胎儿生长监测|膀胱",
            "diagnosticTips": [
            "1.单胎",
            "2.胎儿生长相当于19W1D"
            ],
            "ultrasonicResult": [
            "子宫：外形增大",
            "胎儿：现孕19W1D",
            "宫内见1个胎儿，双顶径：32mm，头围：118mm，腹围：93mm，股骨长：18mm，CDFI示：胎心：152次/分，心律齐，检查过程中见胎心搏动",
            "胎盘：胎盘位置：前壁，胎盘厚：21mm，胎盘分级：1级，胎盘下缘盖过内口",
            "羊水：羊水深度：53mm",
            "附件：膀胱：未充盈",
            "左卵巢：未显示",
            "右卵巢：（—）"
            ],
            "total": 2
        }),'utf-8')
    }
}