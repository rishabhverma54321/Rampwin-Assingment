export const fetch = {"templates":[{
    "name": "company_update",
    "components": [
        {
            "type": "HEADER",
            "format": "TEXT",
            "text": "Welcome from RUM {{1}} Work"
        },
        {
            "type": "BODY",
            "text": "Hello {{1}} {{2}} , 多謝您對RUM Work 有興趣，我地提供7天免費試用，試用包括連接不同即時通訊軟件，提供多人登入模式及獨創 Drip Campaign 自動化銷售訊息 及 Ticketing 功能，解決漏覆客人查詢的問題，詳細可以去我們網站睇睇呀 ! 😁"
        },
        {
            "type": "BUTTONS",
            "buttons": [
                {
                    "type": "URL",
                    "text": "免費試用",
                    "url": "https://www.rumwork.io/"
                }
            ]
        }
    ],
    "language": "zh_HK",
    "status": "APPROVED",
    "category": "ALERT_UPDATE",
    "id": "479261303276251"
},
{
    "name": "sample_flight_confirmation",
    "components": [
        {
            "type": "HEADER",
            "format": "VIDEO"
        },
        {
            "type": "BODY",
            "text": "Ini merupakan konfirmasi penerbangan Anda untuk {{1}}-{{2}} di {{3}}.",
            "existingPlaceHolder": "three"
            // "text": "Ini merupakan konfirmasi penerbangan Anda untuk world di."

        },
        {
            "type": "FOOTER",
            "text": "Pesan ini berasal dari bisnis yang tidak terverifikasi."
        }
    ],
    "language": "id",
    "status": "APPROVED",
    "category": "TICKET_UPDATE",
    "id": "399148435188862"
},
{
    "name": "sample_flight_confirmation1",
    "components": [
        {
            "type": "HEADER",
            "format": "DOCUMENT"
        },
        {
            "type": "BODY",
            "text": "Confirmamos tu vuelo a {{1}}-{{2}} para el {{3}}."
        },
        {
            "type": "FOOTER",
            "text": "Este mensaje proviene de un negocio no verificado."
        }
    ],
    "language": "es",
    "status": "APPROVED",
    "category": "TICKET_UPDATE",
    "id": "1053023378573116"
}]}