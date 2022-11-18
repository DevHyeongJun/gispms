
import axios from 'axios';

const Request = (url, opt, _callBack) => {
    axios({
        method: opt.method||"get",
        url: url,
        data:opt.param,
        responseType: "json"
    }).then(function (response) {
        _callBack(response);
    });
}

export const NotionApi = {
  
    getProjList : async (_calBack) => {

        await Request(`${process.env.VUE_APP_REQUEST_URL}/notion/getProjList`, { method:'post'}, (res) => {
            const list = [];
            res.data.result.forEach((item) => {
                list.push(
                    {
                        'PM' : item['PM'].rich_text[0].plain_text,
                        '담당자' : item['담당자'].rich_text[0].plain_text,
                        '사업일자' : item['사업일자'].rich_text[0].plain_text,
                        '상태' : item['상태'].rich_text[0].plain_text,
                        '코드' : item['코드'].rich_text[0].plain_text,
                        '프로젝트명' : item['프로젝트명'].rich_text[0].plain_text                

                    }
                );
            });
            _calBack(list);
        });

    }
}