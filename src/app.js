import { Router, Route, Link } from 'dva/router';
import Home from './routes';
import Admin from './routes/adminPage';

import { Layout, Menu, Icon, DatePicker } from 'antd';

const { Header, Content, Sider } = Layout;


function App({ history }) {
    
  return (
    <Router history={history}>
            <Layout>
                <Header>
                    <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['3']}
                    >
                    <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/login'>登录</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/admin'>管理</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider collapsible>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1">
                              <Icon type="user" />
                              <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                              <Icon type="video-camera" />
                              <span className="nav-text">nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Icon type="upload" />
                              <span className="nav-text">nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                              <Icon type="bar-chart" />
                              <span className="nav-text">nav 4</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                              <Icon type="cloud-o" />
                              <span className="nav-text">nav 5</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                              <Icon type="appstore-o" />
                              <span className="nav-text">nav 6</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                              <Icon type="team" />
                              <span className="nav-text">nav 7</span>
                            </Menu.Item>
                            <Menu.Item key="8">
                              <Icon type="shop" />
                              <span className="nav-text">nav 8</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <div className="abc" style={{minHeight:600}}>
                        <DatePicker  />
                            <Route exact path="/" component={Home} />
                            <Route path="/admin" component={Admin} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
    </Router>
  );

}

export default App;
