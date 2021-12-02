import request from '@/utils/request'

export function getPage(data) {
    return request({
        url: `/system/menus/getPage`,
        method: 'post',
        data
    })
}

export function add(data) {
    return request({
        url: `/system/menus/add`,
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: `/system/menus/update`,
        method: 'post',
        data
    })
}

export function del(data) {
    return request({
        url: `/system/menus/delete`,
        method: 'post',
        data
    })
}


