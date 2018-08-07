/* Dates */
var d1 = new Date(),                            //Tue Aug 07 2018 23:18:23 GMT+0200 (CEST)
    d_toString = d1.toString(),                 //Tue Aug 07 2018 23:11:43 GMT+0200 (CEST)
    d_toDateString = d1.toDateString(),         //Tue Aug 07 2018
    d_toTimeString = d1.toTimeString(),         //23:11:43 GMT+0200 (CEST)
    d_toUTCString = d1.toUTCString()            //Tue, 07 Aug 2018 21:11:43 

var d2 = new Date(2018, 7, 6, 42, 43, 23, 23)   //Tue Aug 07 2018 18:43:23 GMT+0200 (CEST)

var d3 = new Date(0)                            //Thu Jan 01 1970 01:00:00 GMT+0100 (CET) --> [start day - ms]

var d4 = new Date('2018 07 August')             //Tue Aug 07 2018 00:00:00 GMT+0200 (CEST)



    console.log(`d1: ${d1},
\n.toString: ${d_toString},
\n.toDateString: ${d_toDateString},    
\n.toTimeString: ${d_toTimeString},
\n.toUTCString: ${d_toUTCString},
\nd2: ${d2},
\nd3: ${d3},
\nd4: ${d4}`      
)

