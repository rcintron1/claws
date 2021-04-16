// const AWS = require("aws-sdk")
// const ec2 = new AWS.EC2({region:"us-east-1"});
import { listVolumes, deleteVolumes} from "./libs/ec2.js"

const volumeStatus = ["available"]

listVolumes(volumeStatus).then(volumes=>{
    console.log("count of volumes", volumes.length)
    const volumesToDelete = volumes.filter(volume=>volume.Size===100)
    console.log("count of volumes to delete", volumesToDelete.length)
    // deleteVolumes(volumesToDelete)
})
