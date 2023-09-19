<template>
	<div>
		<template>
			<v-btn class="ma-3" @click="goRoute()" color="green"><v-icon left>
          mdi-plus
        </v-icon> {{ $t('request.createRequest') }}</v-btn>
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
		}
	},
	created(){
		const requestGet = localStorage.getItem('requestList');
 		this.requestList = requestGet ? JSON.parse(requestGet) : [];
	}
}
</script>
