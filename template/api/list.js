import request from '@/utils/request'

export function getPage(data) {
    return request({
        url: `CONFIGURL/getPage`,
        method: 'post',
        data
    })
}

export function add(data) {
    return request({
        url: `CONFIGURL/add`,
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: `CONFIGURL/update`,
        method: 'post',
        data
    })
}

export function del(data) {
    return request({
        url: `CONFIGURL/delete`,
        method: 'post',
        data
    })
}


