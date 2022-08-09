import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import UsersList from "./UsersList";

const UsersDashboard = () => {
	const { userStore } = useStore();
	const { loadUsers, users } = userStore;
	useEffect(() => {
		if (users.length <= 3) loadUsers();
	}, [userStore]);
	if (userStore.loadingInitial)
		return <LoadingComponent content="Loading users" />;
	return (
		<Grid>
			<Grid.Column width="10">
				<List>
					<UsersList />
				</List>
			</Grid.Column>
		</Grid>
	);
};

export default observer(UsersDashboard);