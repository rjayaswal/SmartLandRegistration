/*
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/

'use strict';
const shim = require('fabric-shim');
const util = require('util');

let Chaincode = class {

  // The Init method is called when the Smart Contract 'fabcar' is instantiated by the blockchain network
  // Best practice is to have any Ledger initialization in separate function -- see initLedger()
  async Init(stub) {
    console.info('=========== Instantiated smartLandRegistro chaincode ===========');
    return shim.success();
  }

  // The Invoke method is called as a result of an application request to run the Smart Contract
  // 'fabcar'. The calling application program has also specified the particular smart contract
  // function to be called, with arguments
  async Invoke(stub) {
    let ret = stub.getFunctionAndParameters();
    console.info(ret);

    let method = this[ret.fcn];
    if (!method) {
      console.error('no function of name:' + ret.fcn + ' found');
      throw new Error('Received unknown function ' + ret.fcn + ' invocation');
    }
    try {
      let payload = await method(stub, ret.params);
      return shim.success(payload);
    } catch (err) {
      console.log(err);
      return shim.error(err);
    }
  }

  async queryLandOwner(stub, args) {
    if (args.length != 1) {
      throw new Error('Incorrect number of arguments. Expecting OwnerName ex: Rajeev');
    }
    let landOwner = args[0];

    let carAsBytes = await stub.getState(landOwner); //get the car from chaincode state
    if (!carAsBytes || carAsBytes.toString().length <= 0) {
      throw new Error(landOwner + ' does not exist: ');
    }
    console.log(carAsBytes.toString());
    return carAsBytes;
  }

  async initLedger(stub, args) {
    console.info('============= START : Initialize Ledger ===========');
    let land_properties = [];
    land_properties.push({
      land: 'Gajanan Enclave'
      owner: 'Rajeev'
    });
    land_properties.push({
	    land: 'Gautami Enclave'
      owner: 'Mahendra'
    });
    land_properties.push({
      land: 'Celestia'
      owner: 'Sanjeev'
    });
    land_properties.push({
      land: 'SNiwas'
      owner: 'Mahendra'
    });
    land_properties.push({
      land: 'MantriC'
      owner: 'Biman'
    });
    land_properties.push({
      land: 'MantriD'
      owner: 'SmitaT'
    });
    land_properties.push({
      land: 'Mantri Celestia'
      owner: 'Saraswat'
    });
    land_properties.push({
      land: 'VishnuHomes'
      owner: 'Rajeev'
    });
    land_properties.push({
      land: 'SriRamaResdiency'
      owner: 'Rajesh'
    });
    land_properties.push({
      land: 'ChoudharyNiwas'
      owner: 'Choudhary ram'
    });

    for (let i = 0; i < land_properties.length; i++) {
      land_properties[i].docType = 'land';
      await stub.putState('LAND' + i, Buffer.from(JSON.stringify(land_properties[i])));
      console.info('Added <--> ', land_properties[i]);
    }
    console.info('============= END : Initialize Ledger ===========');
  }

  async createLandOwnerRecord(stub, args) {
    console.info('============= START : Create land-owner record ===========');
    if (args.length != 2) {
      throw new Error('Incorrect number of arguments. Expecting 2');
    }

    var landOwnerRec = {
      docType: 'land',
      land: args[0],
      owner: args[1]
    };

    await stub.putState(args[0], Buffer.from(JSON.stringify(landOwnerRec)));
    console.info('============= END : Create land-owner ===========');
  }

  async queryAllland_properties(stub, args) {

    let startKey = 'Celestia';
    let endKey = 'ChoudharyNiwas';

    let iterator = await stub.getStateByRange(startKey, endKey);

    let allResults = [];
    while (true) {
      let res = await iterator.next();

      if (res.value && res.value.value.toString()) {
        let jsonRes = {};
        console.log(res.value.value.toString('utf8'));

        jsonRes.Key = res.value.key;
        try {
          jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
        } catch (err) {
          console.log(err);
          jsonRes.Record = res.value.value.toString('utf8');
        }
        allResults.push(jsonRes);
      }
      if (res.done) {
        console.log('end of data');
        await iterator.close();
        console.info(allResults);
        return Buffer.from(JSON.stringify(allResults));
      }
    }
  }

  async changeLandOwner(stub, args) {
    console.info('============= START : changeLandOwner ===========');
    if (args.length != 2) {
      throw new Error('Incorrect number of arguments. Expecting 2');
    }

    let carAsBytes = await stub.getState(args[0]);
    let car = JSON.parse(carAsBytes);
    car.owner = args[1];

    await stub.putState(args[0], Buffer.from(JSON.stringify(car)));
    console.info('============= END : changeLandOwner ===========');
  }
};

shim.start(new Chaincode());
