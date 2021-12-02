import request from '@/utils/request'

export function getPage(data) {
    return request({
        url: `/system/users/getPage`,
        method: 'post',
        data
    })
}

export function add(data) {
    return request({
        url: `/system/users/add`,
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: `/system/users/update`,
        method: 'post',
        data
    })
}

export function del(data) {
    return request({
        url: `/system/users/delete`,
        method: 'post',
        data
    })
}


