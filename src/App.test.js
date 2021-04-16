import React from 'react';
import App from './App';
import {create} from 'react-test-renderer'

describe('App Snapshot Test',()=>{
  test('testing app Component',()=>{
    let tree=create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

describe('viewAllScheduledFlight Snapshot test',()=>{
  test('Checking Snapshot',()=>{
    let tree=create(<viewAllScheduledFlight/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

describe('viewScheduledId Snapshot test',()=>{
  test('Checking Snapshot',()=>{
    let tree=create(<viewScheduledId/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})


describe('register Snapshot test',()=>{
  test('Checking Snapshot',()=>{
    let tree=create(<register/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
describe('booking Snapshot test',()=>{
  test('Checking Snapshot',()=>{
    let tree=create(<booking/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
describe('login Snapshot test',()=>{
  test('Checking Snapshot',()=>{
    let tree=create(<login/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})







