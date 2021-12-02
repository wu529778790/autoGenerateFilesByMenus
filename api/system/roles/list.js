import request from '@/utils/request'

export function getPage(data) {
    return request({
        url: `/system/roles/getPage`,
        method: 'post',
        data
    })
}

export function add(data) {
    return request({
        url: `/system/roles/add`,
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: `/system/roles/update`,
        method: 'post',
        data
    })
}

export function del(data) {
    return request({
        url: `/system/roles/delete`,
        method: 'post',
        data
    })
}


