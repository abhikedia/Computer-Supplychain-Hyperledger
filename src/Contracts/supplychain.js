/*
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';
const { Contract } = require('fabric-contract-api');
let laptop={
    cpu_id:"",
    memory_id:"",
    hdd_id:"",
    ssd_id:"",
    graphics_id:"",
    battery_id:"",
    service_tag:"",
    motherboard_id:"",
    status:"",
    reg_no:"",
}

class MyAssetContract extends Contract 
{
    async addNewLaptop(ctx, cpu_id,serial_number,memory_id,hdd_id,ssd_id,graphics_id,battery_id,service_tag,motherboard_id,reg_no)
    {
        laptop.cpu_id=cpu_id;
        laptop.memory_id=memory_id;
        laptop.hdd_id=hdd_id;
        laptop.ssd_id=ssd_id;
        laptop.graphics_id=graphics_id;
        laptop.battery_id=battery_id;
        laptop.service_tag=service_tag;
        laptop.motherboard_id=motherboard_id;
        laptop.reg_no=reg_no;
        laptop.status="Shipped";
        const buffer = Buffer.from(JSON.stringify(laptop));
        await ctx.stub.putState(serial_number,buffer);
    }

    async Delivery1(ctx,serial_number)
    {
        const buffer = await ctx.stub.getState(serial_number);
        let details = JSON.parse(buffer.toString());
        if(details.status=="Shipped")
        {
            laptop.status="del1";
            laptop.reg_no="";
            const buffer = Buffer.from(JSON.stringify(laptop));
            await ctx.stub.putState(serial_number,buffer);
            return laptop.status;
        }
    }

    async Dealer(ctx,serial_number,reg_no)
    {
        const buffer = await ctx.stub.getState(serial_number);
        let details = JSON.parse(buffer.toString());
        if(details.status=="del1")
        {
            laptop.status="deal";
            laptop.reg_no=reg_no;
            const buffer = Buffer.from(JSON.stringify(laptop));
            await ctx.stub.putState(serial_number,buffer);
            return laptop.status;
        }
    }

    async Delivery2(ctx,serial_number)
    {
        const buffer = await ctx.stub.getState(serial_number);
        let details = JSON.parse(buffer.toString());
        if(details.status=="deal")
        {
            laptop.status="del2";
            laptop.reg_no="";
            const buffer = Buffer.from(JSON.stringify(laptop));
            await ctx.stub.putState(serial_number,buffer);
            return laptop.status;
        }
    }

    async getLaptopDetails(ctx,serial_number)
    {
        const buffer = await ctx.stub.getState(serial_number);
        let details = JSON.parse(buffer.toString());
        //console.log(details);
        return details;
    }
}

module.exports = MyAssetContract;