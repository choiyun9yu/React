# Table

테이블을 작성하다보면 반복되는 코드가 너무 많다고 느낄 때가 있다.
이런 반복을 줄이기 위해서 map함수를 사용하면 좋다.

#### 예시

    import React from 'react'
    export const PredictionTable= () => {
    const tableObj = {
        header:['Drone ID', 'Time', 'Roll', 'Pitch', 'Yaw', '자이로 X축', '자이로 Y축', '자이로 Z축', '가속도 X축'],
        data:[
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        { droneId:'Table Cell', time:'Table Cell', roll:'◯', pitch:'Table cell', yaw:'Table cell', ziroX:982, ziroY:'◯', ziroZ:'◯', accX:'◯' },
        ]
    }

    return(
        <table id="predictiontable" className='table-auto flex-col overflow-hidden border-[#6359E9] border border-b-0 rounded-md mt-8 flex justify-center items-center'>
        <thead className={'w-full text-center'}>
            <tr className={'flex border-[#6359E9] border-b bg-[#3E3D6D] text-white font-bold'}>
            {tableObj.header.map((item)=> {
                return <th className='w-1/3 p-5 border-[#6359E9] border-r'>{item}</th>
            })}
            </tr>
        </thead>
        <tbody className={'w-full text-center'}>
            {tableObj.data.map((item)=>{
            return (<tr className={'flex border-[#6359E9] border-b text-[#AEABD8] text-s'}>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.droneId}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.time}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.roll}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.pitch}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.yaw}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.ziroX}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.ziroY}</td>
                <td className='w-1/3 p-5 border-[#6359E9] border-r font-normal'>{item.ziroZ}</td>
                <td className='w-1/3 p-5 border-[#6359E9] font-normal'>{item.accX}</td>
            </tr>)
            })}
        </tbody>
        </table>
    )
    }
