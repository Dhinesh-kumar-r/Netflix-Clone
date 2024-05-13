import { json } from "express";

class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr   
    }

    Search(){
        let keyword = this.queryStr.keyword ? {
            title : {
                $regex : this.queryStr.keyword,
                $options : "i"
            }
        } : {} ;

        this.query.find({...keyword})
        return this
    }

    Filter(){
        const filter = {...this.queryStr}
        const removeFields = ["keyword", "limit","page"];
        removeFields.forEach(field=>delete filter[field]);

        let queryStr = JSON.stringify(filter);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, match=> `$${match}`)
        this.query.find(JSON.parse(queryStr))

        return this;
    }
}

export {ApiFeatures}