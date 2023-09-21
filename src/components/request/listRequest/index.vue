<template>
	<div>
		<template>
			<v-btn class="ma-3" @click="goRoute()" color="green"><v-icon left>
          		mdi-plus
        	</v-icon>
		
		{{ $t('request.createRequest') }}</v-btn>

		
		<v-btn class="ma-3" @click="changeStatus('CONFIRMAÇÃO')" color="green"><v-icon left>
			mdi-cart-arrow-down
        	</v-icon>
		</v-btn> =>
		<v-btn class="ma-3" @click="changeStatus('COMPRAS')" color="green"><v-icon left>
			mdi-cart-check
        	</v-icon>
		</v-btn> =>

		<v-btn class="ma-3" @click="changeStatus('RECEBIMENTO')" color="orange"><v-icon left>
			mdi-cart-percent
        	</v-icon>	
		</v-btn> =>
		
		<v-btn class="ma-3" @click="changeStatus('PAGAMENTO')" color="white"><v-icon left>
			mdi-account-arrow-left
        	</v-icon>
		</v-btn>
		
		<v-btn class="ma-3" @click="changeStatus('ENTRADA')" color="white"><v-icon left>
			mdi-cart-plus
        	</v-icon>
		</v-btn> =>




		{{ statusData }}
			<v-simple-table>
				<template v-slot:default>
					<thead>
						<toolbar :toobarList="toolbartTitles"/>
					</thead>
					<tbody>
						<tr v-for="(item, index) in requestList"
							:key="item.name"
						>
							<td>{{ item.info.numberRequest }}</td>
							<td>
								<span v-if="isMultipleNote()">
									<v-btn v-if="isMultipleNote()" @click="testeBTNTOOLBAR" icon>
										<ButtonTooltip 
											corzinha="green" 
											:icon="$t('request.icon.notes')"
											:title="$t('request.iconTooltip.notes')"   
										/>
									</v-btn>
								</span>

								<span v-if="!isMultipleNote()">
									<v-btn  @click="testeBTNTOOLBAR" icon>
										<ButtonTooltip
											corzinha="red"
											:icon="$t('request.icon.onlyNote')"
											:title="$t('request.iconTooltip.onlyNote')"
										/>
									</v-btn>
								</span>
							</td>
							<td>nome do fornecedor</td>
							<td>status</td>
							<td>status</td>
							<td>status</td>
							<td class="text-center">
								<v-btn @click="testeBTNTOOLBAR" icon>
									<ButtonTooltip
										corzinha="blue"
										:icon="$t('request.icon.infoRequest')"
										:title="$t('request.iconTooltip.infoRequest')"
									/>
								</v-btn>

								<v-btn @click="editRequest(item, index)" icon>
									<ButtonTooltip
										corzinha="green"
										:icon="$t('request.icon.editRequest')"
										:title="$t('request.iconTooltip.editRequest')"
									/>
								</v-btn>
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</template>
	</div>
</template>

<script>
import ButtonTooltip from '../../tools/buttonIconTooltip'
import Toolbar from '../../tools/toolbar'

export default {
	name: 'Home',

	components:{
		Toolbar,
		ButtonTooltip,
	},

	

	data: () => ({
		toolbartTitles:[
			{title:'request.table.numberRequest'},
			{title:'request.table.NumberNotes'},
			{title:'request.table.supplier'},
			{title:'request.table.statusShip'},
			{title:'request.table.statusOrdem'},
			{title:'request.table.statusPay'},
			{title:'request.table.actions'}
		],
		user:{
			name:'nome do uuario',
			função:'cordenador'
		},
		statusData:{},
		statusList:{
			newRequest:{name:'newRequest',color:'blue', icon:'mdi-account-arrow-left'},
			confirmRequest:{name:'confirmRequest',color:'orange',icon:'mdi-account-arrow-left'},
			salleRequest:{name:'salleRequest',color:'green',icon:'mdi-account-arrow-left'},
			stokeRequest:{name:'stokeRequest',color:'purple',icon:'mdi-account-arrow-left'},
			paymentRequest:{name:'paymentRequest',color:'yeallow',icon:'mdi-account-arrow-left'},
		}
	}),

	methods:{
		goRoute(){
			this.$router.push({ name: 'create' })
		},

		isMultipleNote(){
			return true
		},
		testeBTNTOOLBAR(){
			console.log('teste btn')
		},
		editRequest(requestEdit, index){
			this.$router.push({ name: 'createdWithId',params: { id: index }, query: { editData: requestEdit } });
		},
		changeStatus(text){
			this.statusData = text
		}
		// function para pegar valores do firebase
		// async takeValues(){
		// 	this.tasks = [];
		// 	db.collection('task').get().then(snapshot => {
		// 		snapshot.forEach(doc =>{
		// 			let objectTask = doc.data();
		// 			this.tasks.push(objectTask)
		// 		})
		// 	})
		// 	console.log(this.tasks)
		// },
	},
	created(){
		const requestGet = localStorage.getItem('requestList');
 		this.requestList = requestGet ? JSON.parse(requestGet) : [];
	}
}
</script>
