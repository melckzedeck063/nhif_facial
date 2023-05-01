import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 600, 1120],
    ['2007', 1030, 540],
]



export const options = {
    title : 'Company Perfomance'
}



function DataChart({content}) {

   
    const summary = content && content !== "" ?  [
        ['Months', 'Orders', 'Products'],
        [content.months[0], content.orderCounts[0], content.productCounts[0]],
        [content.months[1], content.orderCounts[1], content.productCounts[1]],
        [content.months[2], content.orderCounts[2], content.productCounts[2]],
        [content.months[3], content.orderCounts[3], content.productCounts[3]],
        [content.months[4], content.orderCounts[4], content.productCounts[4]],
        [content.months[5], content.orderCounts[5], content.productCounts[5]],
        [content.months[6], content.orderCounts[6], content.productCounts[6]],
        [content.months[7], content.orderCounts[7], content.productCounts[7]],
        [content.months[8], content.orderCounts[8], content.productCounts[8]],
        [content.months[9], content.orderCounts[9], content.productCounts[9]],
        [content.months[10], content.orderCounts[10], content.productCounts[10]],
        [content.months[11], content.orderCounts[11], content.productCounts[11]]
    ] 
        : null

    // console.log(summary);
    // console.log(data)

  return (
      <>
          <div className="text-red-500">
              {
                  content && content !== "" && (
                      <Chart
                         chartType="Bar"
                         data={summary}
                         width="100%"
                         height="400px"
                         legendToggle
                    />  
                  )
            }
       </div>
      </>
  )
}

export default DataChart