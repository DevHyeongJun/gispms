<!-- 전체 페이지..! -->

<template>
    <div class="wrap">
        <div class="top_menu">
            <TopMenu></TopMenu>
        </div>
        <div class="main">
            <OLMap></OLMap>
            
            <Panel class="left_panel" header="프로젝트 리스트"  :toggleable="true" :collapsed="false" >
                <DataTable :value="projDatas" :paginator="true" class="p-datatable-customers" :rows="10" v-model:filters="filters" :rowHover="true" v-model:selection="selectedCustomers" :loading="loading"
                    responsiveLayout="scroll" breakpoint="240px" :globalFilterFields="['프로젝트명', '담당자', '상태']"
                    @row-click="onRowClick">
                    <template #header>
                      
                        <div class="flex flex-column flex-row justify-content-center align-items-center">
                        
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText style="width:530px" class="p-inputtext p-component" v-model="filters['global'].value" placeholder="프로젝트명 또는 담당자를 입력해주세요." />
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        데이터가 존재하지 않습니다.
                    </template>
                    <template #loading>
                        로딩 중..
                    </template>
                    <!-- <Column field="코드" sortable header="코드"></Column> -->
                    <Column field="프로젝트명" filterMatchMode="contains" class="text_cut" headerStyle="background:none; border-bottom:2px solid #d8d8d8" sortable header="프로젝트명">
                        <template #body="{data}">
                            <span >{{data.프로젝트명}}</span>
                        </template>
                    </Column>
                    <Column field="담당자" sortable header="담당자" headerStyle="background:none; border-bottom:2px solid #d8d8d8" ></Column>
                    <!-- <Column field="PM" sortable header="PM"></Column> -->
                    <Column field="상태" sortable :options="statuses" header="상태" headerStyle="background:none; border-bottom:2px solid #d8d8d8" :filterMenuStyle="{'width':'14rem'}">
                        
                        <template #body="{data}">
                            <span :class="'product-badge status-style-'+this.getStatusCode(data.상태)">{{data.상태}}</span>
                        </template>
                    </Column>
                </DataTable>
            </Panel>
        </div>
        <DynamicDialog ref="dialog" v-if="showCard"/>
       
    </div>
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

import OLMap from '@/components/ol/OLMap.vue';

import {NotionApi} from '@/js/request/notionApi.js';

import TopMenu from '@/components/layout/menu/TopMenu.vue';
import projInfo from '@/components/layout/dialog/projInfo.vue';

export default {
    name: 'MainWrap',
    components: {
        TopMenu,
        OLMap,
        Panel,
        DataTable,
        Column,
        InputText
    },
    
    mounted() {
       
        NotionApi.getProjList((list) => {
            this.projDatas = list;
        });
   
    },

    //12월 1일
    data() {
        return {
            showCard: false,
            projDatas: [],
            statuses : ['유지보수', '대기', '진행중'],

            filters: {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            },
        }
    },
    methods : {
        getStatusCode : (statText) => {
            let code = 0;
            switch ( statText ) {
                case '유지보수' : 
                code = 1;
                break;
                case '진행중' : 
                code = 2;
                break;

            }
            return code;
        }, 

        onRowClick : ()  =>  {
            const dialogRef = this.$dialog.open(projInfo, {
                props: {
                    header: 'Information',
                    modal: true,
                    dismissableMask: true
                },
                data: {
                    totalProducts: this.products ? this.products.length : 0
                }
            });

            console.log(dialogRef);
        },

        onShow() {
            const dialogRef = this.$dialog.open(projInfo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw',
                    },
                    breakpoints:{
                        '960px': '75vw',
                        '640px': '90vw'
                    },
                    modal: true
                },
               
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        const buttonType = data.buttonType;
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });

            console.log(dialogRef);
        }
    },
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */

    .wrap {
        display: flex;
        flex-direction: column;
        height:100%;
        width: 100%;
    }
    
    .wrap > div {
        flex:1;
        overflow: auto;
    }

    .wrap > .top_menu {
        height:80px;
        background:#009688;
        font-size:14px;
        flex:none;
        line-height: 79px;
        padding-left: 10px;
        border-bottom:1px solid #777;
    }

    .main {
        position: relative;
    }

    .main > .left_panel {
        position: absolute;
        left:10px;
        top:10px;
        width:600px;
    }

    .text_cut span {
        display: block;
        white-space: nowrap;
        width:300px;
        padding:0 5px;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .product-badge {
        border-radius: 2px;
        padding: .25em 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: .3px;
        width: 66px;
        display: inline-block;
        text-align: center;
    }
    
    

    .status-style-0 {
        background: #ffcdd2;
        color: #c63737;
    }
    .status-style-1 {
        background: #feedaf;
        color: #8a5340;
    }
    .status-style-2 {
        background: #c8e6c9;
        color: #256029;
    }


    
</style>

<style lang="scss" scoped>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-paginator {
        padding: 1rem;
    }

    .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style>