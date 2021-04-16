import AWS from 'aws-sdk';
const ec2 = new AWS.EC2({region:"us-east-1"});

/**
 * Delete volumes
 * @param {array} volumes an array of volumes
 */
async function deleteVolumes(volumes){
    for (i=0; i<volumes.length; i++){
        try{
            result.push (await ec2.deleteVolume({VolumeId: volume.VolumeId, DryRun:false}).promise())
        }catch (e) {console.log(e)} 
    }

}

/**
 * Returns volumes that matches the 
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

export {deleteVolumes, listVolumes}