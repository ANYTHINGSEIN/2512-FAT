# FAT 2025 遗憾泡泡交互 - 后端统计接口文档

## 1. 概述
本接口用于记录用户在 "2025 遗憾" 页面点击气泡的行为数据，用于后续分析用户痛点分布及裂变路径。

## 2. 接口定义

### 2.1 记录点击事件 (Log Bubble Click)

**Endpoint:** `POST /api/v1/stats/regret-click`

**Content-Type:** `application/json`

**Request Body:**

| 字段名 | 类型 | 必填 | 说明 | 示例 |
| :--- | :--- | :--- | :--- | :--- |
| `userId` | string | 是 | 用户唯一标识 (如工号或OpenID) | `user_12345` |
| `bubbleId` | string | 是 | 被点击气泡的唯一ID | `anxiety_01` |
| `label` | string | 是 | 气泡显示的文本内容 | `我有AI焦虑` |
| `level` | number | 是 | 气泡所在的层级 (1: 核心, 2: 二级, 3: 三级) | `1` |
| `parentId` | string | 否 | 父级气泡ID (如果是根气泡则为空) | `root` |
| `timestamp` | number | 是 | 点击发生的时间戳 (ms) | `1735555200000` |

**Request Example:**

```json
{
  "userId": "user_12345",
  "bubbleId": "anxiety_tech",
  "label": "担心技术更新太快",
  "level": 2,
  "parentId": "anxiety_root",
  "timestamp": 1735555200000
}
```

**Response:**

*   **Status Code:** `200 OK`
*   **Body:**

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "trackId": "evt_987654321" 
  }
}
```

### 2.2 获取统计概览 (Get Stats Overview) - *Optional/Admin*

**Endpoint:** `GET /api/v1/stats/regret-overview`

**Response:**

```json
{
  "code": 0,
  "data": {
    "totalClicks": 1024,
    "topRegrets": [
      { "label": "没有时间学习", "count": 320 },
      { "label": "不知道怎么落地", "count": 210 }
    ]
  }
}
```

## 3. 前端埋点方法 (Stub)

前端代码中已预留 `logRegretClick` 函数，当前仅在控制台输出日志。后端接口就绪后，请在 `src/services/api.js` (建议创建) 中替换 `console.log` 为实际 `fetch` 请求。

```javascript
// src/utils/analytics.js (Proposed)
export const logRegretClick = async (data) => {
  try {
    // TODO: Replace with actual API call
    // await fetch('/api/v1/stats/regret-click', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // });
    console.log('Reporting to backend:', data);
  } catch (error) {
    console.error('Failed to log click:', error);
  }
};
```
