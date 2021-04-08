// const AWS = require("aws-sdk")
// const ec2 = new AWS.EC2({region:"us-east-1"});
import { listVolumes, deleteVolumes} from "./libs/ec2.js"

const volumeStatus = ["available"]

listVolumes(volumeStatus).then(volumes=>{
    console.log(JSON.stringify(volumes))
})

// listVolumes(volumeStatus).then(volumes=>{
//     const result = []
//     console.log(`Count of available ${volumes.length}`)
//     volumes.forEach(async volume=>{
        
//         try{
//             result.push (await ec2.deleteVolume({VolumeId: volume.VolumeId, DryRun:false}).promise())
//         }catch (e) {console.log(e)}
        
//     })
//     Promise.all(result).then(values=>{
//         console.log(values.length>0?"failed":`successfully deleted ${volumes.length} available volumes`)
//     })
// })