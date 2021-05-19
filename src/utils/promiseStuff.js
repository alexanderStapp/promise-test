export const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // randomize reject or failure test
        if(Math.floor(Math.random() * 10) > 5) {
            resolve({data: 'success!'})
        } else {
            reject({message: 'failure!'})
        }
    }, 1500)
})

export const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({data: "Promise 2 Success!"})
    }, 5000)
  })
  
export const thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({data: "Promise 3 Success!"})
    }, 3000)
})
  
export const fourthPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve({data: "Promise 4 Success!"})
    }, 2000)
})
  