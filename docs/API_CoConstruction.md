# FAT 2026 共建需求收集接口

该接口用于收集用户对 2026 年 FAT 平台的期望和共建需求。

**Endpoint:** `POST /api/v1/co-construction/submit`

**Content-Type:** `application/json`

**Request Body:**

| 字段名 | 类型 | 必填 | 说明 | 示例 |
| :--- | :--- | :--- | :--- | :--- |
| `type` | string | 是 | 需求类型 (用法知识, 培训实操, 协同共建, 其他) | "协同共建" |
| `content` | string | 是 | 具体建议或需求内容 | "希望增加更多 AI Agent 的实战案例" |
| `timestamp` | number | 否 | 提交时间戳 (如果不传，后端可自动生成) | 1735545600000 |

**Response (Success):**

```json
{
  "code": 200,
  "message": "Submission successful",
  "data": {
    "submissionId": "sub_1234567890",
    "medalId": "medal_2026_001" // 预留给下一页展示勋章ID
  }
}
```

**Response (Error):**

```json
{
  "code": 400,
  "message": "Invalid input parameters"
}
```

**Notes:**

- 后端应验证 `type` 是否在允许的枚举值列表中。
- `content` 长度应限制在合理范围内 (e.g., 500 chars)。
