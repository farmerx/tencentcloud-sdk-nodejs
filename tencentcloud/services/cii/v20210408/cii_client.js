"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * cii client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cii.tencentcloudapi.com", "2021-04-08", clientConfig);
    }
    /**
     * 依据任务ID获取结构化结果接口。
     */
    async DescribeStructureTaskResult(req, cb) {
        return this.request("DescribeStructureTaskResult", req, cb);
    }
    /**
     * 本接口(CreateStructureTaskTest)基于提供的客户及保单信息，创建并启动结构化识别任务。用于路由到测试环境。
     */
    async CreateStructureTaskTest(req, cb) {
        return this.request("CreateStructureTaskTest", req, cb);
    }
    /**
     * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
     */
    async DescribeStructCompareData(req, cb) {
        return this.request("DescribeStructCompareData", req, cb);
    }
    /**
     * 本接口(CreateStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     */
    async CreateStructureTask(req, cb) {
        return this.request("CreateStructureTask", req, cb);
    }
    /**
     * 本接口(DescribeStructureResult)用于查询结构化结果接口
     */
    async DescribeStructureResult(req, cb) {
        return this.request("DescribeStructureResult", req, cb);
    }
    /**
     * 依据任务ID获取结构化结果接口，该接口用于路由到测试环境。
     */
    async DescribeStructureTaskResultTest(req, cb) {
        return this.request("DescribeStructureTaskResultTest", req, cb);
    }
}
exports.Client = Client;
