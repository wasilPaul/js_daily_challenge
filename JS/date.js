/* Dates */
var d1 = new Date(),                            //Tue Aug 07 2018 23:18:23 GMT+0200 (CEST)

    d_toString = d1.toString(),                 //Tue Aug 07 2018 23:11:43 GMT+0200 (CEST)

    d_toDateString = d1.toDateString(),         //Tue Aug 07 2018

    d_toTimeString = d1.toTimeString(),         //23:11:43 GMT+0200 (CEST)

    d_toUTCString = d1.toUTCString(),           //Tue, 07 Aug 2018 21:11:43 

    d2 = new Date(2018, 7, 6, 42, 43, 23, 23),  //Tue Aug 07 2018 18:43:23 GMT+0200 (CEST)

    d3 = new Date(0),                           //Thu Jan 01 1970 01:00:00 GMT+0100 (CET) --> [start day - ms]

    d4 = new Date('2018 07 August'),            //Tue Aug 07 2018 00:00:00 GMT+0200 (CEST)

    d_getDate = d4.getDate(),                   //7 --> [day] 

    d_getDay = d4.getDay(),                     //2

    d_setYear = d3.setFullYear(2020)            //1577836800000
    


