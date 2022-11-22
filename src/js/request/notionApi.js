
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
    
    getProjInitData : async (_calBack, isLonLat) => {

        await Request(`${process.env.VUE_APP_REQUEST_URL}/notion/getProjList`, { param : {isLonLat : isLonLat}, method:'post'}, (res) => {
            _calBack(res.data.result);
        });
    },

    getProjList : (data) => {
        const list = [];
        data.forEach((item) => {
            list.push(
                {
                    'PM' : item['PM'].rich_text[0].plain_text,
                    '담당자' : item['담당자'].rich_text[0].plain_text,
                    '사업일자' : item['사업일자'].rich_text[0].plain_text,
                    '상태' : item['상태'].rich_text[0].plain_text,
                    '코드' : item['코드'].rich_text[0].plain_text,
                    '프로젝트명' : item['프로젝트명'].rich_text[0].plain_text,
                    '위도' : item['위도'] ? Number(item['위도']) : 0, 
                    '경도' : item['경도']? Number(item['경도']) : 0
                }
            );
        });

        return list;
    },

    getProjCurrent : (data) => {
        const current = {
            '진행중' : 0,
            '유지보수' : 0,
            '대기' : 0
        };
        data.forEach((item) => {
            const stat = item['상태'].rich_text[0].plain_text;
            
            current[stat] = ++current[stat];
        });

        return current;
    },

    getProjMemberList : (data) => {
        const list = [];

        const setMember = (member, stat) => {
            let isContaint = false;

            list.forEach((listObj)=>{
                if ( !isContaint && listObj['이름'] === member ) {
                    if ( listObj[stat] == null ) {
                        listObj[stat] = 1;
                        
                    } else {
                        listObj[stat] = ++listObj[stat];
                    }
                    isContaint = true;
                } 
            });
            
            if ( !isContaint ) {
                const obj = {
                    '이름' : member,
                    '유지보수' : 0,
                    '진행중' : 0,
                    '대기' : 0
                };

                obj[stat] = 1;
                    
                list.push(obj);
            }
        }

        data.forEach((item) => {
            const member = item['담당자'].rich_text[0].plain_text;
            const stat = item['상태'].rich_text[0].plain_text;

            if ( member.split(',').length > 1 ) {
                setMember(member.split(',')[0], stat);
                setMember(member.split(',')[1].replace(' ', ''), stat);
            } else {
                setMember(member, stat);
            }
        });
        
        return list;
    },

}