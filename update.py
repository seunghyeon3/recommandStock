import json
from datetime import datetime

sample_data = {
    "updatedAt": datetime.now().strftime("%Y-%m-%d %H:%M"),
    "sectors": [
        {
            "name": "AI 반도체",
            "score": 97,
            "leader": "SK하이닉스",
            "stocks": [
                "한미반도체",
                "리노공업",
                "ISC"
            ]
        },
        {
            "name": "2차전지",
            "score": 82,
            "leader": "에코프로비엠",
            "stocks": [
                "에코프로",
                "포스코퓨처엠",
                "엘앤에프"
            ]
        }
    ]
}

with open('data/sectors.json', 'w', encoding='utf-8') as f:
    json.dump(sample_data, f, ensure_ascii=False, indent=2)

print('sectors.json updated')
