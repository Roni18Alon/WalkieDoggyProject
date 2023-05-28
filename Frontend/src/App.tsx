import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Home";
import Profile from "./components/user/owner/Profile";
import AddDog from "./components/user/owner/AddDog";
import MyDogs from "./components/user/owner/MyDogs";
import DogWalkersList from "./components/user/owner/DogWalkersList";
import EditProfile from "./components/user/owner/EditProfile";
import WalkerProfile from "./components/user/dogwalker/WalkerProfile";
import WalkerProfileForUser from "./components/user/dogwalker/WalkerProfileForUser";
import RegisterDogWalker from "./components/auth/RegisterDogWalker";
import RegisterDogOwner from "./components/auth/RegisterDogOwner";
import LoginDowOwner from "./components/auth/LoginDogOwner";
import LoginDogWalker from "./components/auth/LoginDogWalker";
import HomeOwner from "./components/pages/home/HomeOwner";
import HomeWalker from "./components/pages/home/HomeWalker";
import WalkerPersonalProfile from "./components/user/dogwalker/WalkerPersonalProfile";
import EditWalkerProfile from "./components/user/dogwalker/EditWalkerProfile";
import WalkerFutureMeetings from "./components/user/dogwalker/WalkerFutureMeetings";
import WalkerHistory from "./components/user/dogwalker/WalkerHistory";
import OwnerHistory from "./components/user/owner/OwnerHistory";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/HomeOwner" element={<HomeOwner />} />
          <Route path="/HomeWalker" element={<HomeWalker />} />
          <Route path="/RegisterDogWalker" element={<RegisterDogWalker />} />
          <Route path="/RegisterDogOwner" element={<RegisterDogOwner />} />
          <Route path="/LoginDogOwner" element={<LoginDowOwner />} />
          <Route path="/LoginDogWalker" element={<LoginDogWalker />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/WalkerProfile" element={<WalkerProfile />} />
          <Route
            path="/WalkerProfileForUser"
            element={<WalkerProfileForUser />}
          />
          <Route path="/EditWalkerProfile" element={<EditWalkerProfile />} />
          <Route
            path="/WalkerPersonalProfile"
            element={<WalkerPersonalProfile />}
          />
          <Route
            path="/WalkerFutureMeetings"
            element={<WalkerFutureMeetings />}
          />
          <Route path="/WalkerHistory" element={<WalkerHistory />} />
          <Route path="/OwnerHistory" element={<OwnerHistory />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/AddDog" element={<AddDog />} />
          <Route path="/MyDogs" element={<MyDogs />} />
          <Route path="/DogWalkersList" element={<DogWalkersList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
