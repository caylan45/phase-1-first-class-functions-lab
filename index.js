const returnFirstTwoDrivers=(array)=>{const copyarray=array.slice(0,2);
    return copyarray;

}
const returnLastTwoDrivers=(array)=>{const copyarray=array.slice(-2);
return copyarray
}
let selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

createFareMultiplier(fare)
{
     (num)=>{return fare*num};
}