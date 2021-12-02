import request from '@/utils/request'

export function getPage(data) {
    return request({
        url: `/dashboard/getPage`,
        method: 'post',
        data
    })
}

export function add(data) {
    return request({
        url: `/dashboard/add`,
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: `/dashboard/update`,
        method: 'post',
        data
    })
}

export function del(data) {
    return request({
        url: `/dashboard/delete`,
        method: 'post',
        data
    })
}


