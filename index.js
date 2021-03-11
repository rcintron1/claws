const AWS = require("aws-sdk")
const ec2 = new AWS.EC2({region:"us-east-1"});

/**
 * 
 * @param {array} status An array with one or more of the following options:
 * creating | available | in-use | deleting | deleted | error
 */
async function listVolumes(status){
    var params = {
        Filters: [
            {
              Name: 'status',
              Values: status
            },
          ]
    };
    const volumes = (await ec2.describeVolumes(params).promise()).Volumes
    
    return volumes
}

/**
 * Delete volumes
 * @param {array} volumes 
 */
async function deleteVolumes(volumes){

}

const volumeStatus = ["available"]

listVolumes(volumeStatus).then(volumes=>{
    const result = []
    console.log(`Count of available ${volumes.length}`)
    volumes.forEach(async volume=>{
        
        try{
            result.push (await ec2.deleteVolume({VolumeId: volume.VolumeId, DryRun:false}).promise())
        }catch (e) {console.log(e)}
        
    })
    Promise.all(result).then(values=>{
        console.log(values.length>0?"failed":`successfully deleted ${volumes.length} available volumes`)
    })
})