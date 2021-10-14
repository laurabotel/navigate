import * as fs from "fs";
import {Request, Response, NextFunction} from 'express';
import getYAMLData from "./yamlParser";
import getJSONFiles from "./logAggregator";

interface someObject {
    [key: string]: any
}

const databaseController: someObject = {};

databaseController.getData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = getYAMLData();
    res.locals.data = data;
  return next();
  } catch (error) {
    console.log('Error in databaseController.getData: ', error)
  }
}

databaseController.getLiveData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = getJSONFiles();
    res.locals.pollingData = data;
    return next();
  } catch (error) {
    console.log('Error inside databaseController.getLiveData: ', error);
    return next();
  }
}

export default databaseController;