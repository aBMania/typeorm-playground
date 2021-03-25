import "reflect-metadata";
import {createConnection} from "typeorm";
import {EMTNIssuance, Issuance} from "./entity/Model";

createConnection().then(async connection => {
    const emtnIssuance = new EMTNIssuance();
    emtnIssuance.emtnProperty = 'emtn'
    emtnIssuance.issuanceProperty = 'issuance'
    emtnIssuance.operationProperty = 'operation'
    await connection.manager.save(emtnIssuance);
    const issuances = await connection.manager.find(Issuance);
    console.log("Loaded issuances: ", issuances);

}).catch(error => console.log(error));
