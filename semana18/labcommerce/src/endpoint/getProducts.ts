import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { CustomError } from "../error/CustomError";


export const getProducts = async(req:Request,res:Response):Promise<void>=>{
    try{
        const product = new ProductDataBase()
        const productList = await product.getAll()
        if(productList.length===0){
            throw new CustomError(404,"Nenhum produto encontrado")
        }
        res.status(200).send(productList)
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}