import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ['Year', 'Sales'],
    ['2004', 1000],
    ['2005', 1170],
    ['2006', 600],
    ['2007', 1030],
]

export const options = {
    title : 'Company Perfomance'
}


function PieChart({content}) {
  
  // console.log(content)
  const summary = content && content !== "" ?  [
    ['Order Status', 'Counts'],
    [content.orderStatus[0], content.statusCounts[0]],
    ['PENDING', 0.5],
    ['PROCESSED', 0.5],
    ['DELIVERED', 0.5],
  ]
     :  null
  
  // console.log(summary)

  return (
      <>
          <div className="text-red-500">
       <Chart
          chartType="PieChart"
          data={summary}
          width="100%"
          height="300px"
          legendToggle
     />
       </div>
      </>
  )
}

export default PieChart